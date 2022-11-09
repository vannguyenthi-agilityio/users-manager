export namespace USER {
  export enum ROLES {
    EDITOR = 'Editor',
    AUTHOR = 'Author',
    MAINTAINER = 'Maintainer',
    SUBSCRIBER = 'Subscriber'
  }

  export enum PLANS {
    TEAM = 'Team',
    ENTERPRISE = 'Enterprise',
    COMPANY = 'Company'
  }

  export enum STATUS {
    PENDING = 'Pending',
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
  }
}
