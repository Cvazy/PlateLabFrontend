export interface ITransformComparisonsElement {
  name: string;
  value: string;
}

export interface ITransformComparisons {
  id: number | string;
  title: string;
  elements: ITransformComparisonsElement[];
}
