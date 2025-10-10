'use client';
import { MoonGateProvider, MoongateConnectButton } from '@moongate/sdk';


export default function Home() {
  return (
    // apiKey={process.env.NEXT_PUBLIC_MOONGATE_API_KEY!}
    <MoonGateProvider apiKey={'mg_pk_903dc0258b360f3eadeddc4a343d31f8'}  >
      <div className="min-h-screen flex items-center justify-center">
        <MoongateConnectButton />
      </div>
    </MoonGateProvider>
  )
}
