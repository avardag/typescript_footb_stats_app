import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';

const reader = new CSVFileReader("football.csv");
reader.read();

console.log(reader.data)


let ManUnitedWins = 0;

for(let match of reader.data){
  if(match[1] === 'Man United' && match[5]===MatchResult.HomeWin){
    ManUnitedWins++;
  }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    ManUnitedWins++;
  }
}

console.log(`Manchester United won ${ManUnitedWins} games`)