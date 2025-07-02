export interface TOurValue {
  title: string;
  description: string | null;
}

export interface TOurValueSectionProps {
  title: string;
  values: TOurValue[];
}
