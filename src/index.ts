import { MatchResult } from './MatchResult';
import { MatchReader } from './Matchreader';

const reader = new MatchReader("football.csv");
reader.read();

// console.log(reader.data)


let ManUnitedWins = 0;

for(let match of reader.data){
  if(match[1] === 'Man United' && match[5]===MatchResult.HomeWin){
    ManUnitedWins++;
  }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    ManUnitedWins++;
  }
}

console.log(`Manchester United won ${ManUnitedWins} games`)