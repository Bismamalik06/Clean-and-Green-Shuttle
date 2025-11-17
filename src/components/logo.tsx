import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logos/main-logo.png"
        alt="Clean and Green Shuttle Service Logo"
        width={48}
        height={48}
        priority
        className="h-12 w-12 rounded-full object-cover shadow-md border-2 border-primary/50"
      />
      <span className="font-bold text-lg hidden sm:inline-block leading-tight">
        Clean & Green
      </span>
    </div>
  );
};

export default Logo;
