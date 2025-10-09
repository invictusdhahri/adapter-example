'use client';
import { MoonGateProvider, MoongateConnectButton } from '@moongate/sdk';


export default function Home() {
  return (
    <MoonGateProvider apiKey={process.env.NEXT_PUBLIC_MOONGATE_API_KEY!} >
      <div className="min-h-screen flex items-center justify-center">
        <MoongateConnectButton />
      </div>
    </MoonGateProvider>
  )
}
