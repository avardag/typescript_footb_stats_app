import fs from 'fs';

export abstract class CSVFileReader<T>{
  data: T[] = [];

  constructor(public filename: string){}
  //map rows to return matchdata kind of rows
  //abstract class. Will be implemented by child class
  abstract mapRow(row: string[]): T;
  
  read(): void{
    //parse csv file
  this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row:string): string[]=>{
      return row.split(",")
    })
    .map(this.mapRow)
    }
  
}

/*
<T> -> generics. Like func args, but for types in class/func definitions
Allow us to define the type of a prop/arg/return val at a future point
Used heavily i when writing reusable code.
<T> in child class can be <number>, <string>, <{location:{lat: number}}>, <MyCustomType> etc
*/