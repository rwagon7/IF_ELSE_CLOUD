export interface TopCard {
    header: string;
    sub_header: string;
    value: string;
  }
  
export interface NewUser {
    id: string;
    picture: string;
    name: string;
    isActive: boolean;
    country: string;
    progress: number;
  }
  
export interface RecentOrder {
    id: string;
    name: string;
    product: string;
    delivery_date: string;
    status: string;
    tracking_no: string;
    shipping: boolean;
  }
  
export interface Data {
    top_cards: TopCard[];
    new_users: NewUser[];
    recent_orders: RecentOrder[];
  }

  