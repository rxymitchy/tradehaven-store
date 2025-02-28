
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container px-4 flex items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md animate-slide-in">
          <h1 className="text-8xl font-display font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! We can't seem to find the page you're looking for.
          </p>
          <Button size="lg" className="rounded-full px-8 btn-hover-effect" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
