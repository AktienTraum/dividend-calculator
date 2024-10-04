import {ParameterIF} from "../interfaces/parameter-if";


export interface StorageIf {
  "inuse": boolean,
  "params": ParameterIF | null
}
