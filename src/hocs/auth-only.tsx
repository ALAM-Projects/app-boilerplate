"use client";

import { verifyToken } from "@/app/api/auth/_controllers";
import Unauthorized from "@/components/Unauthorized";
import { useSession } from "next-auth/react"; // Use next-auth's useSession hook directly
import React, { useEffect, useState } from "react";

type AuthOnlyProps = {
  ChildComponent: React.ElementType;
  authorizedRoles: string[];
};

export function authOnly({
  ChildComponent,
  authorizedRoles = [],
}: AuthOnlyProps) {
  return function AuthenticatedComponent(childProps: any) {
    const { data: session, status } = useSession(); // Using next-auth's session hook
    const [isLoading, setIsLoading] = useState(true); // Track if session is still loading
    const [tokenIsValid, setTokenIsValid] = useState<boolean | null>(null);
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    // This effect runs whenever session changes
    useEffect(() => {
      const verifyAuthToken = async () => {
        if (session) {
          const response = await verifyToken({ token: session.accessToken });

          // Check if token verification is successful
          if (!response?.error) {
            setTokenIsValid(true);

            // Check authorization based on roles
            const role = session.user?.role;
            setIsAuthorized(
              authorizedRoles.length === 0 || authorizedRoles.includes(role)
            );
          } else {
            setTokenIsValid(false);
            setIsAuthorized(false);
          }
        }

        setIsLoading(false); // Once session is validated, stop the loading state
      };

      if (session) {
        verifyAuthToken();
      } else {
        setIsLoading(false); // If no session, just stop the loading state
      }
    }, [session]); // This effect runs when `session` or `authorizedRoles` changes

    // While loading or if the session is invalid or user isn't authorized, show loading or unauthorized state
    if (isLoading) {
      return <div>Loading...</div>; // Show a loading state while session and token validation are in progress
    }

    if (
      status === "unauthenticated" ||
      !tokenIsValid ||
      isAuthorized === false
    ) {
      return <Unauthorized session={session || undefined} />;
    }

    // If session is valid and user is authorized, render the wrapped component
    return <ChildComponent {...childProps} />;
  };
}
