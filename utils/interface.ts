export interface ItemsProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}
[];

export interface GithubProps {
  githubUsers?: {
    total_count: number;
    incomplete_results: boolean;
    items: ItemsProps;
  };
}
[];

export interface ReviewProps {
  allUsers?: ItemsProps[];
  isLoading?: boolean;
  getUsers?: ItemsProps[];
}

export interface RocketProps {
  id: number;
  title: string;
  description: string;
  rocketName: string;
  githubUser: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
}

export interface UpdateRocketProps {
  id: number;
  title: string;
  description: string;
  rocketName: string;
  githubUser: ItemsProps;
}
