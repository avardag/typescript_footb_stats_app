import { MatchResult } from './MatchResult';
import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';

//Create an obj that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

//Create instance of MatchReader ad pass in smth stisfying MatchReader interface
const matchReader = new MatchReader(csvFileReader);
//load matches read by matchReader
matchReader.load()
// matchReader.matches -> our matches


let ManUnitedWins = 0;

for(let match of matchReader.matches){
  if(match[1] === 'Man United' && match[5]===MatchResult.HomeWin){
    ManUnitedWins++;
  }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    ManUnitedWins++;
  }
}

console.log(`Manchester United won ${ManUnitedWins} games`)