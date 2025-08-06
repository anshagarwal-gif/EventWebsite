import React, { useState, useMemo } from 'react'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'
import NewsImage from './Assets/newsImage.jpeg'
import './Blog.css'
import BlogPostImage from './Assets/blogPostImage.jpeg'

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBlogId, setSelectedBlogId] = useState(1); // Default to first blog
    const postsPerPage = 3;
    
    // Full blog data with complete content
    const allBlogPosts = [
        {
            id: 1,
            title: 'Unveiling Excellence in Events & Exhibitions',
            date: '01 JUNE 2024',
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
            title: 'Creative Event Planning Strategies',
            date: '15 MAY 2024',
            description: 'Discover innovative approaches to event planning that will set your events apart from the competition.',
            image: BlogPostImage,
            fullContent: [
                "In today's competitive event landscape, creativity is the key differentiator that transforms ordinary gatherings into extraordinary experiences. Our team at Wadhwa Events & Exhibits has mastered the art of creative event planning, delivering unique solutions that captivate audiences and exceed expectations.",
                "Creative event planning begins with understanding your audience's desires and expectations. We conduct thorough research to identify what resonates with your target demographic, ensuring every element of the event speaks directly to their interests and preferences. This audience-first approach allows us to craft experiences that are not only memorable but also meaningful.",
                "Technology integration plays a crucial role in modern event planning. From interactive displays and augmented reality experiences to seamless digital check-ins and real-time social media engagement, we leverage cutting-edge technology to enhance every aspect of your event. Our tech-savvy approach ensures your event stays ahead of the curve.",
                "Sustainability is no longer optional in event planning – it's essential. We incorporate eco-friendly practices throughout our planning process, from sourcing sustainable materials to implementing waste reduction strategies. Our green approach not only benefits the environment but also enhances your brand's reputation among environmentally conscious attendees."
            ]
        },
        {
            id: 3,
            title: 'Corporate Event Trends 2024',
            date: '28 APRIL 2024',
            description: 'Stay ahead with the latest corporate event trends that are shaping the industry in 2024.',
            image: BlogPostImage,
            fullContent: [
                "The corporate events landscape is evolving rapidly, with 2024 bringing exciting new trends that are reshaping how businesses connect with their audiences. At Wadhwa Events & Exhibits, we're at the forefront of these innovations, helping our clients stay ahead of the curve.",
                "Hybrid events have become the new standard, combining the best of in-person and virtual experiences. This approach allows companies to reach a broader audience while maintaining the personal touch that makes events memorable. Our hybrid event solutions seamlessly integrate both formats, ensuring consistent quality across all touchpoints.",
                "Personalization is taking center stage in corporate events. Today's attendees expect experiences tailored to their specific interests and needs. We use advanced data analytics and attendee profiling to create personalized journeys that maximize engagement and value for each participant.",
                "Wellness-focused events are gaining tremendous popularity as companies prioritize employee well-being. From meditation sessions and healthy catering options to ergonomic seating arrangements and mental health workshops, we're incorporating wellness elements into corporate gatherings to create more holistic experiences."
            ]
        },
        {
            id: 4,
            title: 'Exhibition Design Masterclass',
            date: '10 APRIL 2024',
            description: 'Learn the secrets of creating captivating exhibition designs that attract and engage visitors.',
            image: BlogPostImage,
            fullContent: [
                "Exhibition design is both an art and a science, requiring a perfect balance of creativity, functionality, and strategic thinking. Our design team at Wadhwa Events & Exhibits has perfected this balance, creating exhibitions that not only look stunning but also drive meaningful engagement and business results.",
                "The foundation of great exhibition design lies in understanding your brand story and translating it into a physical space. We work closely with our clients to identify their core message and values, then craft designs that communicate these elements through every visual and interactive element of the exhibition.",
                "Flow and navigation are critical components of successful exhibition design. We carefully plan visitor journeys, ensuring intuitive pathways that guide attendees through your story in a logical and engaging sequence. Strategic placement of key elements maximizes exposure and creates natural gathering points for meaningful interactions.",
                "Interactive elements have become essential in modern exhibitions. From touch screens and product demonstrations to virtual reality experiences and hands-on activities, we integrate interactive features that encourage participation and create memorable moments that visitors will associate with your brand long after the event ends."
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'1.5rem'}>
                        <path fill="#ffffff" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
                    </svg>
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