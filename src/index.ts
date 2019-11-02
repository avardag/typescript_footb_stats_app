import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HTMLReport } from './reportTargets/HTMLReport';

//Create an obj that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

//Create instance of MatchReader ad pass in smth stisfying MatchReader interface
const matchReader = new MatchReader(csvFileReader);
//load matches read by matchReader
matchReader.load()
// matchReader.matches -> our matches

//Build Summary
const summary = new Summary(
  new WinsAnalysis("Everton"),
  new HTMLReport('EvertonReport')
)

summary.buildAndPrintReport(matchReader.matches)