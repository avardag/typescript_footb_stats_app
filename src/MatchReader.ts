import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import {MatchData} from './MatchDataType';
import { CSVFileReader } from './CSVFileReader';

interface DataReader{
  read(): void;
  data: string[][];
}

export class MatchReader{
  // method to read files from CSV without making new instance of the class
  static fromCSV(filename: string): MatchReader{
    return new MatchReader( new CSVFileReader(filename))
  }
  reader: DataReader;
  matches: MatchData[] = [];

  constructor(reader: DataReader) {
    this.reader = reader;
  }
  
  load(): void{
    //read file by reader(CSVFileReader)
    this.reader.read();
    //assign data returned by reader to this.matches 
    //after mapping and producing MatchData type of values
    this.matches = this.reader.data.map((row: string[]): MatchData=>{
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ]
    })
  }
}