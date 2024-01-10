using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class AddSeriesOrderColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "SeriesID",
                table: "Articles",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Articles",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(2024, 1, 9, 21, 47, 47, 405, DateTimeKind.Local).AddTicks(4338),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValue: new DateTime(2024, 1, 9, 16, 46, 22, 943, DateTimeKind.Local).AddTicks(6232));

            migrationBuilder.AddColumn<int>(
                name: "SeriesOrder",
                table: "Articles",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SeriesOrder",
                table: "Articles");

            migrationBuilder.AlterColumn<int>(
                name: "SeriesID",
                table: "Articles",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Articles",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(2024, 1, 9, 16, 46, 22, 943, DateTimeKind.Local).AddTicks(6232),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldDefaultValue: new DateTime(2024, 1, 9, 21, 47, 47, 405, DateTimeKind.Local).AddTicks(4338));
        }
    }
}
