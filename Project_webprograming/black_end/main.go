package main

import (
	"fmt"
	"net/http"
	Authcontroller "project/rapi/controller/auth"
	Usercontroller "project/rapi/controller/user"
	"project/rapi/middleware"

	"project/rapi/orm"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

type Register struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
	Fullname string `json:"fullname" binding:"required"`
	Avatar   string `json:"avatar" binding:"required"`
}

type Userlgs struct {
	gorm.Model
	Username string
	Password string
	Fullname string
	Avatar   string
}

type Book struct {
	gorm.Model
	Time   string
	Date   string
	Room   string
	Id_std string
}

func main() {
	err := godotenv.Load(".env")

	if err != nil {
		fmt.Println("Error loading .env file")
	}
	orm.InitDB()
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders: []string{"Content-Type,access-control-allow-origin, access-control-allow-headers", "Authorization"},
	}))
	r.POST("/register", Authcontroller.Registerf)
	r.POST("/login", Authcontroller.Lognif)
	authorized := r.Group("/users", middleware.JWTAuthen())
	authorized.GET("/readall", Usercontroller.Ruser)
	authorized.GET("/profile", Usercontroller.Profile)
	r.GET("/readbook", func(c *gin.Context) {
		var books []orm.Books
		orm.Db.Find(&books)
		c.JSON(200, books)
	})
	r.GET("/readbook/:ID", func(c *gin.Context) {
		ID := c.Param("ID")
		var books orm.Books
		orm.Db.First(&books, ID)
		c.JSON(200, gin.H{"status": "ok", "message": "Update Success", "Books": books})
	})
	r.POST("/book", func(c *gin.Context) {
		var book orm.Books
		if err := c.ShouldBindJSON(&book); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		result := orm.Db.Create(&book)
		c.JSON(200, gin.H{"RowsAffected": result.RowsAffected, "status": "ok"})
	})
	r.DELETE("/delete", func(c *gin.Context) {
		var book orm.Books
		if err := c.ShouldBindJSON(&book); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		orm.Db.Delete(&book)
		c.JSON(200, gin.H{"message": "Delete Success", "status": "ok"})
	})
	r.PUT("/edit", func(c *gin.Context) {
		var book orm.Books
		var updatedBook orm.Books
		if err := c.ShouldBindJSON(&book); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		orm.Db.First(&updatedBook, book.ID)
		updatedBook.Id_std = book.Id_std
		updatedBook.Room = book.Room
		updatedBook.Time = book.Time
		updatedBook.Date = book.Date
		orm.Db.Save(updatedBook)
		c.JSON(200, gin.H{"message": "Update Success", "status": "ok"})
	})

	r.Run("localhost:8080")
}
