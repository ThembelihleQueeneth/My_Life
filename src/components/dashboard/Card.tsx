interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string | number;
  variant?: 'default' | 'gradient' | 'glass' | 'modern';
  className?: string;
  actionButton?: React.ReactNode;
}

export const Card = ({ 
  title, 
  children, 
  icon, 
  badge,
  variant = 'default',
  className = '',
  actionButton
}: CardProps) => {
  
  const variantStyles = {
    default: 'bg-white border-none',
    gradient: 'bg-gradient-to-br from-white via-white to-blue-50/60 shadow-xl shadow-blue-100/40',
    glass: 'bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl shadow-blue-100/20',
    modern: 'bg-gradient-to-br from-white to-white border-none shadow-2xl shadow-blue-200/20'
  };

  const iconStyles = {
    default: 'bg-gradient-to-br from-specBlue/10 to-blue-100 text-specBlue',
    gradient: 'bg-gradient-to-br from-specBlue to-blue-600 text-white shadow-lg shadow-blue-400/30',
    glass: 'bg-white/80 backdrop-blur-sm text-specBlue border border-blue-200/50',
    modern: 'bg-gradient-to-br from-blue-50 to-white text-specBlue border border-blue-100'
  };

  return (
    <div 
      className={`
        ${variantStyles[variant]}
        rounded-3xl
        transition-all duration-500 hover:duration-300
        p-8 relative overflow-hidden group
        hover:shadow-2xl hover:shadow-blue-200/40 hover:-translate-y-2
        ${className}
      `}
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-specBlue/5 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-125"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-300/5 to-transparent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"></div>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className="flex items-start gap-4">
          {icon && (
            <div className={`
              w-12 h-12 rounded-2xl flex items-center justify-center 
              transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
              ${iconStyles[variant]}
            `}>
              <div className="scale-110">
                {icon}
              </div>
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-specBlue to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
              {title}
            </h3>
            {variant === 'modern' && (
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-specBlue/40 to-blue-400/40 rounded-full group-hover:w-16 transition-all duration-300"></div>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {badge && (
            <div className={`
              px-3 py-1.5 text-sm font-semibold rounded-full 
              transition-all duration-300 group-hover:scale-105
              ${variant === 'gradient' || variant === 'modern' 
                ? 'bg-gradient-to-r from-specBlue/10 to-blue-100/50 text-specBlue border border-blue-200/50' 
                : 'bg-gradient-to-r from-specBlue to-blue-600 text-white shadow-md shadow-blue-400/30'
              }
            `}>
              {badge}
            </div>
          )}
          {actionButton && (
            <div className="transition-transform duration-300 group-hover:translate-x-1">
              {actionButton}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Interactive bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-32"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 via-specBlue/0 to-blue-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500"></div>
    </div>
  );
};

// Optional: Card Header component for better structure
export const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mb-6 ${className}`}>
    {children}
  </div>
);

// Optional: Card Content component
export const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`${className}`}>
    {children}
  </div>
);

// Optional: Card Footer component
export const CardFooter = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-8 pt-6 border-t border-blue-100/50 ${className}`}>
    {children}
  </div>
);

// Example usage with enhanced styling:
export const ExampleCard = () => (
  <Card
    title="Dashboard Overview"
    variant="modern"
    icon={
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    }
    badge="New"
    actionButton={
      <button className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-50 to-white border border-blue-200/50 flex items-center justify-center text-specBlue hover:scale-110 transition-transform duration-300">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    }
  >
    <CardContent>
      <p className="text-specGrey/80 leading-relaxed mb-4">
        Your dashboard provides a comprehensive overview of all your important metrics and upcoming deadlines.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/30">
          <p className="text-sm text-specGrey">Active Items</p>
          <p className="text-2xl font-bold text-specBlue mt-1">24</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-green-50/50 to-white border border-green-100/30">
          <p className="text-sm text-specGrey">Completed</p>
          <p className="text-2xl font-bold text-green-600 mt-1">12</p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-200/50 text-specBlue font-medium hover:from-specBlue hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300">
        View Details
      </button>
    </CardFooter>
  </Card>
);