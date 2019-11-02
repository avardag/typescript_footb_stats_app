import { MatchData } from "./MatchDataType";
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer{
  run(matches: MatchData[]): string
}

export interface OutputTarget{
  print(report: string): void
}

export class Summary{
  //returns instance of summary class with WinsAnalysis and HTMLReport classes passed as args
  static WinsAnalysisWithHTMLReport(teamName: string): Summary{
    return new Summary(
      new WinsAnalysis(teamName),
      new HTMLReport(teamName)
    )
  }

  // analyzer:Analyzer;
  // outputTarget: OutputTarget;

  // constructor(analyzer:Analyzer, outputTarget: OutputTarget){
  //   this.analyzer = analyzer;
  //   this.outputTarget = outputTarget;
  // } // or do as below
  constructor(public analyzer:Analyzer, public outputTarget: OutputTarget){}


  buildAndPrintReport(matches: MatchData[]): void{
    //analyze data
    const report = this.analyzer.run(matches);
    //print report
    this.outputTarget.print(report)
  }

}

/*
to be used as 
const summary = new Summary(new WinsAnalysis(), new ConsoleReport());
*/