interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string | number;
  variant?: 'default' | 'gradient' | 'glass';
  className?: string;
}

export const Card = ({ 
  title, 
  children, 
  icon, 
  badge,
  variant = 'default',
  className = ''
}: CardProps) => {
  
  const variantStyles = {
    default: 'bg-white border border-specLightBlue/50',
    gradient: 'bg-gradient-to-br from-white to-blue-50/50 border border-specBlue/20',
    glass: 'bg-white/80 backdrop-blur-sm border border-specLightBlue/30'
  };

  return (
    <div 
      className={`
        ${variantStyles[variant]}
        rounded-2xl shadow-lg hover:shadow-xl 
        transition-all duration-300 hover:-translate-y-1
        p-6 relative overflow-hidden group
        ${className}
      `}
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-specBlue/5 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-10 h-10 bg-gradient-to-br from-specBlue to-blue-600 rounded-lg flex items-center justify-center shadow-md text-white group-hover:scale-110 transition-transform">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-specBlue group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </div>
        
        {badge && (
          <div className="px-3 py-1 bg-gradient-to-r from-specBlue to-blue-600 text-white text-sm font-semibold rounded-full shadow-sm">
            {badge}
          </div>
        )}
      </div>

      {/* Decorative line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-specBlue/20 via-specBlue/50 to-transparent mb-4 rounded-full"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom accent border on hover */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-specBlue via-blue-500 to-specBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};