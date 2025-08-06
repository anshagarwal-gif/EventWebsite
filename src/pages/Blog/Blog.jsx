import React, { useState, useMemo } from 'react'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'
import NewsImage from './Assets/newsImage.jpeg'
import './Blog.css'
import BlogPostImage from './Assets/blogPostImage.jpeg'
import BlogPostImage2 from './Assets/blogPostImage2.png'
import BlogPostImage3 from './Assets/blogPostImage3.png'
import BlogPostImage4 from './Assets/blogPostImage4.png'

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBlogId, setSelectedBlogId] = useState(1); // Default to first blog
    const postsPerPage = 3;
    
    // Full blog data with complete content
    const allBlogPosts = [
        {
            id: 1,
            title: 'Unveiling Excellence in Events & Exhibitions',
            date: '01 JUNE 2025',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: NewsImage,
            fullContent: [
                "Welcome to the latest edition of the Wadhwa Events & Exhibits newsletter, where we celebrate our milestones and showcase our commitment to creating extraordinary experiences for our esteemed clients. From corporate giants to educational institutions, we have left an indelible mark in the world of events and exhibits.",
                "Our clientele speaks volumes about our expertise and dedication. We've delivered sophisticated and dynamic corporate event solutions for TATA, reflecting the brand's innovation and legacy; curated elegant and expansive exhibitions for Sahara that showcased the company's diverse portfolio; designed high-impact product launches and trade show exhibits for JCB to captivate global audiences; executed luxurious private events and bespoke exhibits for Pristine's elite clientele; partnered with ICE Global for international conferences, ensuring flawless execution with a touch of finesse; and crafted stunning displays and promotional events for PNG Jewellers that radiated the brand's elegance and tradition.",
                "At MIT ADT University, we have managed a variety of impactful events that showcased the institution's commitment to innovation and excellence. Our work included conceptualizing and executing academic summits, cultural fests, and technology expos that brought together students, faculty, and industry leaders. Notably, we had the honor of hosting and managing Persona, Pune's biggest techno-cultural event. With its dynamic mix of technology, culture, and creativity, Persona became a resounding success under our meticulous planning and seamless execution, further solidifying the university's reputation as a hub of innovation and culture.",
                "We take pride in our ability to adapt and innovate. Whether it's crafting bespoke solutions for new-age startups or handling mega-events for established enterprises, Wadhwa Events & Exhibits continues to redefine industry standards. As we step into the future, our commitment to delivering excellence remains unwavering. With each project, we aim to inspire, innovate, and leave a lasting impression on our clients and their audiences.",
                "Follow us on our journey to transform ideas into reality. For inquiries, partnerships, or to explore how we can make your vision come alive, reach out to us today."
            ]
        },
    {
        id: 2,
        title: 'Client Voices – What Sets Wadhwa Events Apart',
        date: '12 JULY 2025',
        description: 'At Wadhwa Events and Exhibits, we understand that event planning is more than logistics — it’s about turning a client’s vision into a living, breathing experience. Our clients trust us with their most important moments, and we pride ourselves on delivering not just what they ask for, but much more.',
        image: BlogPostImage2,
        fullContent: [
            "In today’s rapidly evolving world of events, delivering exceptional value to clients requires not just execution but intuition, empathy, and innovation. At Wadhwa Events and Exhibits, our clients are at the core of everything we do — their ideas, stories, and goals drive our planning and execution.",
            "Each event begins with a deep dive into the client's purpose, audience, and tone. From there, we co-create a roadmap that blends creativity with precision. Whether it's a corporate gala, a product launch, a wedding celebration, or a grand-scale expo — we approach every project as a unique story waiting to be told.",
            "Our clients appreciate how we bring vision to reality through collaborative design processes, detailed timelines, and proactive updates. What sets us apart is our ability to marry aesthetic with efficiency — creating events that are not only stunning but also stress-free for our clients.",
            "We believe in building long-term relationships over one-time transactions. A major portion of our work today comes through referrals and returning clients who trust us to deliver again and again. Their trust is our badge of honor.",
            "Client feedback is woven into our growth strategy. Every testimonial, every review, and every handshake at the end of a successful event adds to the learning and the legacy we continue to build. Our work doesn’t end at execution — it’s just the beginning of a lasting relationship with our clients."
        ]
    },
    {
        id: 3,
        title: 'Corporate Event Trends 2025',
        date: '28 JUNE 2025',
        description: 'Explore the top trends shaping corporate events in 2025 — from hybrid experiences and sustainability to personalized engagement and wellness-first design, all tailored to enhance business impact and attendee experience.',
        image: BlogPostImage3,
        fullContent: [
            "Corporate events in 2025 are no longer just about networking and brand presence — they are immersive, purposeful experiences that resonate with participants at a personal and professional level. At Wadhwa Events and Exhibits, we’ve observed and implemented key trends that are transforming how organizations connect with their people.",
            "Hybrid is here to stay. Blending in-person intimacy with virtual scalability, hybrid events allow businesses to reach wider audiences, reduce carbon footprints, and track engagement like never before. We design these experiences holistically — ensuring that both digital and physical attendees receive equal attention and impact.",
            "Data-driven personalization is becoming the gold standard. From pre-event surveys and real-time polling to AI-powered content recommendations, we’re using data to create individualized experiences that make attendees feel seen and valued.",
            "Sustainability has shifted from being a 'nice-to-have' to a 'must-have.' Brands are increasingly conscious of their environmental impact. We incorporate sustainable practices across the event lifecycle — from digital invites and locally sourced materials to zero-waste catering.",
            "Well-being and mental health are also front and center. Today’s corporate events feature yoga corners, recharge zones, healthy meal stations, and mindfulness sessions. These elements not only rejuvenate attendees but also reflect a brand’s holistic commitment to its people.",
            "Ultimately, 2025 is about authenticity. Brands that host meaningful events with clear purpose and community-building at their core are the ones winning hearts and headlines. Wadhwa Events continues to evolve with these trends, offering future-forward solutions tailored for every business."
        ]
    },
    {
        id: 4,
        title: 'Exhibition Design Masterclass – Creating Impactful Spaces',
        date: '10 JUNE 2025',
        description: 'Uncover the key elements of modern exhibition design that go beyond aesthetics — including layout strategy, interactivity, brand storytelling, and data-driven decision-making for maximizing visitor impact and ROI.',
        image: BlogPostImage4,
        fullContent: [
            "Exhibitions are no longer just booths and banners — they’re experiences. At Wadhwa Events and Exhibits, we specialize in transforming static spaces into dynamic storytelling zones that immerse visitors, showcase brands, and drive interactions.",
            "A great exhibition begins with brand clarity. We work closely with our clients to distill their core message and USP into visual language. From color psychology and thematic elements to lighting, signage, and spatial design — every element contributes to the story.",
            "Layout and movement are often underestimated, but we consider them essential. We design with traffic flow in mind, ensuring intuitive navigation, accessibility, and maximized visibility. Key zones such as product displays, demo counters, and networking areas are planned with strategic intent.",
            "Interactivity is the name of the game. Our designs integrate AR/VR zones, touchscreen kiosks, gamified experiences, live demos, and feedback stations that encourage two-way engagement. These elements help create not just interest but emotional connection.",
            "One of the biggest goals in any exhibition is lead generation. Our designs balance brand immersion with clear call-to-actions — ensuring that the experience is not just memorable but also measurable.",
            "Post-event analytics are part of our deliverable. We help clients understand visitor behavior, footfall density, and interaction hotspots — data that feeds into stronger future strategies. With Wadhwa Events, your exhibition isn’t just well-designed — it’s smart, strategic, and scalable."
        ]
    }

        // Continue with more blog posts following the same pattern...
    ];

    // Get the currently selected blog post
    const selectedBlog = allBlogPosts.find(post => post.id === selectedBlogId) || allBlogPosts[0];

    // Get all other blog posts (excluding the selected one)
    const otherBlogPosts = allBlogPosts.filter(post => post.id !== selectedBlogId);

    const totalPages = Math.ceil(otherBlogPosts.length / postsPerPage);

    const currentPosts = useMemo(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        return otherBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
    }, [currentPage, selectedBlogId]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleBlogClick = (blogId) => {
        setSelectedBlogId(blogId);
        setCurrentPage(1); // Reset to first page when switching blogs
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    };

    const renderPaginationNumbers = () => {
        const pageNumbers = [];
        const maxVisibleButtons = 5;
        let startPage, endPage;

        if (totalPages <= maxVisibleButtons) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const middlePage = Math.floor(maxVisibleButtons / 2);
            
            if (currentPage <= middlePage + 1) {
                startPage = 1;
                endPage = maxVisibleButtons;
            } else if (currentPage + middlePage >= totalPages) {
                startPage = totalPages - maxVisibleButtons + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - middlePage;
                endPage = currentPage + middlePage;
            }
        }

        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) pageNumbers.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }

        return pageNumbers.map((page, index) => {
            if (page === '...') {
                return (
                    <span key={`ellipsis-${index}`} className="recent-posts-ellipsis">
                        ...
                    </span>
                );
            }
            return (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`recent-posts-page-number ${currentPage === page ? 'recent-posts-active' : ''}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                >
                    {String(page).padStart(2, '0')}
                </button>
            );
        });
    };

    return (
        <div>
            {/* Main Blog Post Display */}
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={selectedBlog.image} alt={selectedBlog.title} className='blog-image'/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:"5rem"}}>
                    <p className='blog-date'>{selectedBlog.date}</p>
                    
                </div>
                <h1 className='blog-title'>{selectedBlog.title}</h1>
                <div className='blog-content'>
                    {selectedBlog.fullContent.map((paragraph, index) => (
                        <p key={index} className='blog-description'>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className='section-divider'></div>

            {/* Recent Blog Posts Section (Other Posts) */}
            <div className="recent-posts-container">
                <h1 className="recent-posts-main-heading">OTHER BLOG POSTS</h1>
                
                <div className="recent-posts-grid">
                    {currentPosts.map(post => (
                        <div 
                            key={post.id} 
                            className="recent-posts-item"
                            onClick={() => handleBlogClick(post.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="recent-posts-img-wrapper">
                                <img src={post.image} alt={post.title} className="recent-posts-img" />
                            </div>
                            <h2 className="recent-posts-item-title">{post.title}</h2>
                            <p className="recent-posts-item-desc">{post.description}</p>
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="recent-posts-pagination">
                        <div className="recent-posts-numbers">
                            {renderPaginationNumbers()}
                        </div>
                    </div>
                )}
            </div>

            <AppointmentComponent />
        </div>
    )
}

export default Blog