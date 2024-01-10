using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class AddDateSeriesSummaryThumbnail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Articles",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(2024, 1, 9, 16, 46, 22, 943, DateTimeKind.Local).AddTicks(6232));

            migrationBuilder.AddColumn<int>(
                name: "SeriesID",
                table: "Articles",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Summary",
                table: "Articles",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Thumbnail",
                table: "Articles",
                type: "BLOB",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Articles");

            migrationBuilder.DropColumn(
                name: "SeriesID",
                table: "Articles");

            migrationBuilder.DropColumn(
                name: "Summary",
                table: "Articles");

            migrationBuilder.DropColumn(
                name: "Thumbnail",
                table: "Articles");
        }
    }
}
