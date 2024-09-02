/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

// 注册用户信息
declare type SignUpParams = {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
};

// 登录用户信息
declare type LoginUser = {
  email: string;
  password: string;
};

// 用户信息
declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

// 创建新用户信息
declare type NewUserParams = {
  userId: string;
  email: string;
  name: string;
  password: string;
};

// 账户信息
declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  sharableId: string;
};

// 交易信息
declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

// 银行信息
declare type Bank = {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  sharableId: string;
};

// 账户类型
declare type AccountTypes =
  | "depository"
  | "credit"
  | "loan "
  | "investment"
  | "other";

declare type Category = "Food and Drink" | "Travel" | "Transfer";

// 分类信息
declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};

// 接收者信息
declare type Receiver = {
  firstName: string;
  lastName: string;
};

// 转账信息
declare type TransferParams = {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
};

// 添加资金来源信息
declare type AddFundingSourceParams = {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
};

// 创建 Dwolla 客户信息
declare type NewDwollaCustomerParams = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

// 信用卡信息接口
declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

// 银行信息接口
declare interface BankInfoProps {
  account: Account;
  appwriteItemId?: string;
  type: "full" | "card";
}

// 头部信息接口
declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

// 移动导航信息接口
declare interface MobileNavProps {
  user: User;
}

// 页面头部信息接口
declare interface PageHeaderProps {
  topTitle: string;
  bottomTitle: string;
  topDescription: string;
  bottomDescription: string;
  connectBank?: boolean;
}

// 分页信息接口
declare interface PaginationProps {
  page: number;
  totalPages: number;
}

// Plaid 链接信息接口
declare interface PlaidLinkProps {
  user: User;
  variant?: "primary" | "ghost";
  dwollaCustomerId?: string;
}

// declare type User = sdk.Models.Document & {
//   accountId: string;
//   email: string;
//   name: string;
//   items: string[];
//   accessToken: string;
//   image: string;
// };

// 认证表单信息接口 
declare interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

// 银行下拉信息接口
declare interface BankDropdownProps {
  accounts: Account[];
  setValue?: UseFormSetValue<any>;
  otherStyles?: string;
}

// 银行标签信息接口
declare interface BankTabItemProps {
  account: Account;
  appwriteItemId?: string;
}

// 总余额信息接口
declare interface TotlaBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

// 页脚信息接口
declare interface FooterProps {
  user: User;
  // 添加状态
  type?: 'mobile' | 'desktop'
}

// 右侧边栏信息接口
declare interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

// 左侧边栏信息接口
declare interface SidebarProps {
  user: User;
}

// 最近交易信息接口
declare interface RecentTransactionsProps {
  accounts: Account[];
  transactions: Transaction[];
  appwriteItemId: string;
  page: number;
}

// 交易历史信息接口
declare interface TransactionHistoryTableProps {
  transactions: Transaction[];
  page: number;
}

// 分类标签信息接口
declare interface CategoryBadgeProps {
  category: string;
}

// 交易表格信息
declare interface TransactionTableProps {
  transactions: Transaction[];
}

// 分类信息接口
declare interface CategoryProps {
  category: CategoryCount;
}

// 饼图信息接口 
declare interface DoughnutChartProps {
  accounts: Account[];
}

// 转账表单信息接口
declare interface PaymentTransferFormProps {
  accounts: Account[];
}

// Actions
// 获取账户信息接口
declare interface getAccountsProps {
  userId: string;
}

// 获取账户信息接口
declare interface getAccountProps {
  appwriteItemId: string;
}

// 获取机构信息接口
declare interface getInstitutionProps {
  institutionId: string;
}

// 获取交易信息接口
declare interface getTransactionsProps {
  accessToken: string;
}

// 创建资金来源信息
declare interface CreateFundingSourceOptions {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

// 创建交易信息接口
declare interface CreateTransactionProps {
  name: string;
  amount: string;
  senderId: string;
  senderBankId: string;
  receiverId: string;
  receiverBankId: string;
  email: string;
}

// 获取交易信息接口
declare interface getTransactionsByBankIdProps {
  bankId: string;
}

// 登录信息接口
declare interface signInProps {
  email: string;
  password: string;
}

// 获取用户信息接口
declare interface getUserInfoProps {
  userId: string;
}

// 交换公共令牌信息接口
declare interface exchangePublicTokenProps {
  publicToken: string;
  user: User;
}

// 创建银行账户信息接口
declare interface createBankAccountProps {
  accessToken: string;
  userId: string;
  accountId: string;
  bankId: string;
  fundingSourceUrl: string;
  sharableId: string;
}

// 获取银行信息接口
declare interface getBanksProps {
  userId: string;
}

// 获取银行信息接口
declare interface getBankProps {
  documentId: string;
}

// 获取银行信息接口
declare interface getBankByAccountIdProps {
  accountId: string;
}
