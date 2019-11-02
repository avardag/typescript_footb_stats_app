import { MatchData } from "./MatchDataType";

export interface Analyzer{
  run(matches: MatchData[]): string
}

export interface OutputTarget{
  print(report: string): void
}

export class Summary{
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