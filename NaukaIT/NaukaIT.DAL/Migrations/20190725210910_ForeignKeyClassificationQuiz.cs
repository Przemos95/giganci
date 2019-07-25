using Microsoft.EntityFrameworkCore.Migrations;

namespace NaukaIT.DAL.Migrations
{
    public partial class ForeignKeyClassificationQuiz : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ClassificationInGame_QuizId",
                table: "ClassificationInGame",
                column: "QuizId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassificationInGame_Quiz_QuizId",
                table: "ClassificationInGame",
                column: "QuizId",
                principalTable: "Quiz",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassificationInGame_Quiz_QuizId",
                table: "ClassificationInGame");

            migrationBuilder.DropIndex(
                name: "IX_ClassificationInGame_QuizId",
                table: "ClassificationInGame");
        }
    }
}
