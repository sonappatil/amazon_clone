import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import{Document} from "mongoose";

@Schema()
export class Product {

    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    price: number;
    @Prop()
    description: string;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);
