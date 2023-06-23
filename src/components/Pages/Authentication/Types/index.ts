export interface IStep<T> {
  onNext: (data: T) => void;
}
