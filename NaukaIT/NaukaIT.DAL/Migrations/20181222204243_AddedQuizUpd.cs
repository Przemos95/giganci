using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NaukaIT.DAL.Migrations
{
    public partial class AddedQuizUpd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Question_Quiz_QuizId",
                table: "Question");

            migrationBuilder.DropForeignKey(
                name: "FK_UserQuizResult_Quiz_QuizId",
                table: "UserQuizResult");

            migrationBuilder.DropForeignKey(
                name: "FK_UserQuizResult_Users_UserId",
                table: "UserQuizResult");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserQuizResult",
                table: "UserQuizResult");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Question",
                table: "Question");

            migrationBuilder.RenameTable(
                name: "UserQuizResult",
                newName: "UserQuizResults");

            migrationBuilder.RenameTable(
                name: "Question",
                newName: "Questions");

            migrationBuilder.RenameIndex(
                name: "IX_UserQuizResult_UserId",
                table: "UserQuizResults",
                newName: "IX_UserQuizResults_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_UserQuizResult_QuizId",
                table: "UserQuizResults",
                newName: "IX_UserQuizResults_QuizId");

            migrationBuilder.RenameIndex(
                name: "IX_Question_QuizId",
                table: "Questions",
                newName: "IX_Questions_QuizId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserQuizResults",
                table: "UserQuizResults",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Questions",
                table: "Questions",
                column: "ID");

            migrationBuilder.CreateTable(
                name: "ClassificationInGame",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    QuizId = table.Column<int>(nullable: false),
                    Score = table.Column<int>(nullable: false),
                    GoodAnswers = table.Column<int>(nullable: false),
                    AllAnswers = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassificationInGame", x => x.ID);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Quiz_QuizId",
                table: "Questions",
                column: "QuizId",
                principalTable: "Quiz",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserQuizResults_Quiz_QuizId",
                table: "UserQuizResults",
                column: "QuizId",
                principalTable: "Quiz",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserQuizResults_Users_UserId",
                table: "UserQuizResults",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Quiz_QuizId",
                table: "Questions");

            migrationBuilder.DropForeignKey(
                name: "FK_UserQuizResults_Quiz_QuizId",
                table: "UserQuizResults");

            migrationBuilder.DropForeignKey(
                name: "FK_UserQuizResults_Users_UserId",
                table: "UserQuizResults");

            migrationBuilder.DropTable(
                name: "ClassificationInGame");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserQuizResults",
                table: "UserQuizResults");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Questions",
                table: "Questions");

            migrationBuilder.RenameTable(
                name: "UserQuizResults",
                newName: "UserQuizResult");

            migrationBuilder.RenameTable(
                name: "Questions",
                newName: "Question");

            migrationBuilder.RenameIndex(
                name: "IX_UserQuizResults_UserId",
                table: "UserQuizResult",
                newName: "IX_UserQuizResult_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_UserQuizResults_QuizId",
                table: "UserQuizResult",
                newName: "IX_UserQuizResult_QuizId");

            migrationBuilder.RenameIndex(
                name: "IX_Questions_QuizId",
                table: "Question",
                newName: "IX_Question_QuizId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserQuizResult",
                table: "UserQuizResult",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Question",
                table: "Question",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Question_Quiz_QuizId",
                table: "Question",
                column: "QuizId",
                principalTable: "Quiz",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserQuizResult_Quiz_QuizId",
                table: "UserQuizResult",
                column: "QuizId",
                principalTable: "Quiz",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserQuizResult_Users_UserId",
                table: "UserQuizResult",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
