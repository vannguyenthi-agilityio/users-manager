import ReferralInfo from './ReferralInfo/index';

export default function ReferralContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="referral">
      <div className="container">
        <div className="d-flex referral-content">
          {children}
          <ReferralInfo />
        </div>
      </div>
    </section>
  );
}
