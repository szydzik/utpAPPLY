import {Department} from "./Department";
export class Course {

  id : number;
  name : string;
  location : string;
  type : string;
  ects : number;
  duration : string;
  awards : string;
  tuititionFee : Float32Array;
  applicationFee : Float32Array;
  overview : string;
  // studyFormEnum : StudyFormEnum;
  department : Department;
  // languageDicts : LanguageDict[];
  // entryQualifications : EntryQualification[];
  // languageQualifications : LanguageQualification[];

  constructor(){
  }


}
