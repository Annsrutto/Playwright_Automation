interface ValidationResult {
  endpoint: string;
  status: ValidationStatus;
}

enum ValidationStatus {
  Passed = "passed",
  Failed = "failed",
}

function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const validationResults: ValidationResult[] = [
  { endpoint: "/users", status: ValidationStatus.Passed },
  { endpoint: "/orders", status: ValidationStatus.Failed },
];

const firstResult = getFirst(validationResults);

console.log(firstResult);
