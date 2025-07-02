interface TSubscription {
  feature: string;
  oneOff: boolean;
  subscription: boolean;
}

export interface TSubscriptionProps {
  title: string;
  description: string[];
  subscriptions: TSubscription[];
}
