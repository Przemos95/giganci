using Microsoft.EntityFrameworkCore.Migrations;

namespace NaukaIT.DAL.Migrations
{
    public partial class AlterEmailTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImgUrl",
                table: "Articles",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Shortcut",
                table: "Articles",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImgUrl",
                table: "Articles");

            migrationBuilder.DropColumn(
                name: "Shortcut",
                table: "Articles");
        }
    }
}
