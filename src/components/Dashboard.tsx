import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Target, AlertTriangle, DollarSign, CreditCard, PiggyBank, Users } from 'lucide-react';
import financialHero from "@/assets/financial-hero.jpg";

const Dashboard = () => {
  // Mock data for demonstration
  const spendingData = [
    { name: 'Jan', amount: 2400 },
    { name: 'Feb', amount: 2210 },
    { name: 'Mar', amount: 2290 },
    { name: 'Apr', amount: 2000 },
    { name: 'May', amount: 2181 },
    { name: 'Jun', amount: 2500 },
  ];

  const categoryData = [
    { name: 'Food', value: 400, color: 'hsl(217, 91%, 60%)' },
    { name: 'Transport', value: 300, color: 'hsl(142, 76%, 36%)' },
    { name: 'Entertainment', value: 200, color: 'hsl(38, 92%, 50%)' },
    { name: 'Shopping', value: 150, color: 'hsl(0, 84%, 60%)' },
  ];

  const goals = [
    { name: 'Emergency Fund', current: 2500, target: 5000, progress: 50 },
    { name: 'Vacation', current: 800, target: 2000, progress: 40 },
    { name: 'New Laptop', current: 450, target: 1200, progress: 38 },
  ];

  const recentTransactions = [
    { id: 1, description: 'Grocery Store', amount: -45.50, category: 'Food', date: '2024-01-15' },
    { id: 2, description: 'Salary Deposit', amount: 2500.00, category: 'Income', date: '2024-01-14' },
    { id: 3, description: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', date: '2024-01-13' },
    { id: 4, description: 'Bus Pass', amount: -80.00, category: 'Transport', date: '2024-01-12' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={financialHero} 
            alt="Financial Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart Finance Manager
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              AI-powered insights to help students manage money, track goals, and build financial wellness
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="animate-slide-up">
                <Target className="mr-2 h-5 w-5" />
                Set New Goal
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary animate-slide-up">
                <CreditCard className="mr-2 h-5 w-5" />
                Add Transaction
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="financial-card animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$3,248.50</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="financial-card animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Spending</CardTitle>
              <CreditCard className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">$1,250.00</div>
              <p className="text-xs text-danger flex items-center mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                +8.2% from budget
              </p>
            </CardContent>
          </Card>

          <Card className="financial-card animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Savings Goal</CardTitle>
              <PiggyBank className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">$3,750</div>
              <p className="text-xs text-success flex items-center mt-1">
                <Target className="h-3 w-3 mr-1" />
                75% to target
              </p>
            </CardContent>
          </Card>

          <Card className="financial-card animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Alert</CardTitle>
              <AlertTriangle className="h-4 w-4 text-danger" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-danger">3</div>
              <p className="text-xs text-muted-foreground mt-1">
                Active alerts
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <Card className="financial-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Spending Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="hsl(217, 91%, 60%)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="financial-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="h-5 w-5 text-success" />
                Expense Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${value}`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Goals and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="financial-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Financial Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{goal.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ${goal.current} / ${goal.target}
                    </span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    {goal.progress}% complete
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="financial-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{transaction.category}</Badge>
                      <span className={`font-bold ${transaction.amount > 0 ? 'text-success' : 'text-danger'}`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;