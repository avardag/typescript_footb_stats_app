import { CSVFileReader } from './CSVFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//definig Tuple
export type MatchData = [ Date, string, string, number, number, MatchResult, string ]

//MatchReader inherits from CSVFileReader and passes generic type of MatchData
export class MatchReader extends CSVFileReader<MatchData>{
  //map rows to return matchdata kind of rows
  mapRow(row: string[]): MatchData{
      
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
}
}
