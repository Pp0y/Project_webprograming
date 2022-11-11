package user

import (
	"net/http"
	"project/rapi/orm"

	"github.com/gin-gonic/gin"
)

func Ruser(c *gin.Context) {
	userId := c.MustGet("userId").(float64)
	var user []orm.Userlgs
	orm.Db.First(&user, userId)
	c.JSON(http.StatusOK, gin.H{"status": "ok", "message": "User Read Success", "user": user})

}

func Profile(c *gin.Context) {
	userId := c.MustGet("userId").(float64)
	var user []orm.Userlgs
	orm.Db.First(&user, userId)
	c.JSON(http.StatusOK, gin.H{"status": "ok", "message": "User Read Success", "user": user})

}

func ReadAllbooks(c *gin.Context) {
	var books []orm.Books
	orm.Db.Find(&books)
	c.JSON(http.StatusOK, gin.H{"status": "ok", "message": "User Readbook Success", "book": books})

}
