import { Table, Column, Model, PrimaryKey, DataType } from "sequelize-typescript";

@Table
export class Pdf extends Model<Pdf> {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        allowNull: false
    })
    id: number;

    @Column
    account_number: string;
}
