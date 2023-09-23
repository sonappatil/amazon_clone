import { Inject, Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel : Model<ProductDocument>){}

 async create(name: string, price: number, description: string): Promise<ProductDocument>{
    const newProduct = new this.productModel({name,price,description});
    
    return newProduct.save();
  }

  async finALL (): Promise<ProductDocument[]>{
    return this.productModel.find().exec();
  }
    
  async findByID(id:string):Promise<ProductDocument>{
    return this.productModel.findById(id).exec();
  }

  async update(id: string, newName:  string, newPrice: number, newDescription : string):Promise<ProductDocument>{
    let exsitingProduct = await  this.findByID(id);xdescribe

     exsitingProduct.name = newName ?? exsitingProduct.name;
     exsitingProduct.price = newPrice ?? exsitingProduct.price;
     exsitingProduct.description = newDescription ?? exsitingProduct.description;

     return exsitingProduct.save();
  }

  async delete (id : string){
    return this.productModel.deleteOne({_id : id}).exec();
  }

  
}
