package orm

import "gorm.io/gorm"

type Books struct {
	gorm.Model
	Time   string
	Date   string
	Room   string
	Id_std string
}
