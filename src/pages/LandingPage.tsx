import FAQSection from '@/components/FAQSection'
import FeatureSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import LeaderboardSection from '@/components/LeaderboardSection'
import PrizeSection from '@/components/PrizeSection'

export default function LandingPage() {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <PrizeSection />
            <LeaderboardSection />

            <FAQSection />
        </div>
    )
}
