import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './PageStyles.css';

export default function AboutUs() {
  return (
    <main className="page-main">
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #f0fff9, #eaffef)' }}>
        <div className="container page-hero-inner">
          <div className="page-hero-text">
            <span className="section-tag">About Us</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              About Tiny Todds Therapy Care
            </h1>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.75, maxWidth: 540, marginBottom: 24 }}>
              We are a specialised therapy centre focused on early detection, intervention, and personalised care for children with autism, ADHD, learning disabilities and developmental delays.
            </p>
            <Link to="/contact" className="btn-primary">Contact Us <FaArrowRight /></Link>
          </div>
          <div className="page-hero-emoji">🏥</div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <span className="section-tag">About the Clinic</span>
          <h2 className="section-title">Tiny Todds Therapy Care</h2>
          <p>Tiny Todds Therapy care was started its first service in Anna Nagar as a small therapy clinic in February 2007. It was shifted to Saidapet in August 2009. Because of the strong referrals by parents of special children, now we are serving in 20 locations.</p>
          <p style={{ marginTop: 16 }}>We have branches in Saidapet, Adambakkam, Egmore, Tambaram, Porur, Thiruvanmiyur, Anna Nagar, Mylapore, Choolaimedu, K.K Nagar, Poonamalle, Mogappair, Neelankarai, Perambur, Ambattur, Sholinganallur, West Mambalam (head office), Mannady, Ramapuram etc.</p>
          <p style={{ marginTop: 16 }}>Presently we provide services to more than 600 kids with the help of more than 175 staff members.</p>
          <p style={{ marginTop: 16 }}>Tiny Todds Therapy Care is well known among parents of special children for its quality care and richness in knowledge. It also provides developmental screening for children from 0-3 years, which helps in early detection of autism, ADHD, cerebral palsy and mental retardation.</p>
        </div>
      </section>

      <section className="content-section bg-light">
        <div className="container">
          <span className="section-tag">About Our Program</span>
          <h2 className="section-title">Our Approach</h2>
          <p>After working several years with children with Autism, ADHD and other associated disorders we developed a unique program which helps to recover children from Autism without much difficulty.</p>
          <p style={{ marginTop: 16 }}>Earlier days we used conventional methods to treat children with Autism. At that time, we were able to recover 10 to 20 percent of children from autism, but we failed to send them back to mainstream school. After so many years of therapy they went back to special school. Then we understood that we were heading in the wrong direction.</p>
          <p style={{ marginTop: 16 }}>We found two categories of children in Autism.</p>
          <h3 style={{ marginTop: 24 }}>1. High functioning Autism</h3>
          <p>These children have higher IQ, autism features are fewer, recover very fast from autism and if they are properly trained they complete regular schooling and lead a normal life.</p>
          <h3 style={{ marginTop: 24 }}>2. Low functioning Autism</h3>
          <p>These children have very lower IQ, severe behaviour issues, many autistic features and difficulty in following commands.</p>
          <p style={{ marginTop: 16 }}>Recovery of high IQ Autism children was always an easier task for us. But recovering children with low IQ was tough. We started comparing both groups, then we found that these low IQ children had a problem in identifying the picture when we say the name. This milestone should be achieved by age 1.5 years to 2 years (note that Autism regression happens at this age). All the high IQ autism children achieved this milestone. After achieving this milestone the child is able to understand command. So we came to a conclusion that all low functioning Autism children become high functioning if they identify the picture when we say the name.</p>
          <p style={{ marginTop: 16 }}>But making a low IQ child identify the picture is not an easy task. It was very tough. We tried more than 20 methods to pick up the picture but instead of learning the name of the picture they learned the pattern. We had a very tough time finding a solution for this problem. After 12 years of consistent effort we found a method which helps low IQ autism children to identify the picture. Now most of the low IQ children started identifying the pictures and move to a high functioning level, and low IQ children are very less in number, usually older kids or those who came from other centres.</p>
          <p style={{ marginTop: 16 }}>Now we are proud to say that we have found a way to recover autism with low IQ or severe autism.</p>
          <p style={{ marginTop: 16 }}>Our unique method of teaching skills helps to improve their IQ at a higher level when compared to their age. Many children are doing maths of higher standard with ease. One of the leading psychologists rang me and asked “what are you doing in your centre, all the children from your centre have higher IQ which I have not noticed in children going to other centres.” This gave me a spark of starting the Sharp Brain-IQ-Booster program for normal children.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <span className="section-tag">SHARP BRAIN – IQ BOOSTER PROGRAM - TODDLERS</span>
          <h2 className="section-title">1.5 year to 3 Years</h2>
          <p>This program is designed to prevent Autism, Attention Deficit and Hyperactivity Disorder (ADHD), Learning Disabilities, Speech Delay and other developmental disabilities.</p>
          <p style={{ marginTop: 16 }}>This is an alternate for playschool, where we take children with age group between 1.5 to 3.5 years. These children are screened for autism and other developmental disabilities. They are allowed to play with their peers for early speech development and social interaction. We also provide developmental milestone-based training for each child with individual care. We create a track record of their development and monitor the progress. If any child undergoes this program they are far less likely to be affected by autism, and this program gives an early start to the children so that their DQ will be higher than other children. These children start to read, write, comprehend and do addition and subtraction before they go to school.</p>
        </div>
      </section>

      <section className="content-section bg-light">
        <div className="container">
          <span className="section-tag">SHARP BRAIN – IQ BOOSTER PROGRAM – PRIMARY</span>
          <h2 className="section-title">3.5 to 8 years</h2>
          <p>This program is developed for slow learners. It helps students learn reading, writing, comprehension and math problems with easy techniques and step by step training, helping them to learn subjects at great speed.</p>
          <p style={{ marginTop: 16 }}>We can see changes usually within 6 months, and to attain the full benefits of this program, children should continue this program for 3 years. No child is a dull child. Any child can perform better if the training is good.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <span className="section-tag">Speciality</span>
          <h2 className="section-title">What Makes Our Centre Special</h2>
          <p>The specialty of the centre is that it has different methods of treating and educating special children depending upon their category. All the programs are scientifically formulated so that the children are not only taken care of with mother’s love but also gradually attain betterment in learning and doing things at home.</p>
          <p style={{ marginTop: 16 }}>Admitting your child at Tiny Todds Therapy Centre means offering them a somewhat better future on par with other children.</p>
        </div>
      </section>

      <section className="page-cta-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: 12 }}>Ready to Start Your Child's Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>Reach out to us today. Our expert team is ready to help.</p>
          <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
            Book a Consultation <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
