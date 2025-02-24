import React, { useState, useMemo } from 'react'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'
import NewsImage from './Assets/newsImage.jpeg'
import './Blog.css'
import BlogPostImage from './Assets/blogPostImage.jpeg'

const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    
    const allBlogPosts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit 4',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 7,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 8,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 9,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 10,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id:11,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 12,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
        {
            id: 13,
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Suspendisse lectus massa tellus purus elementum elementum egestas laoreet..',
            image: BlogPostImage
        },
    ];

    const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

    const currentPosts = useMemo(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        return allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
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
            <div className='blog-card'>
                <div className='blog-image-container'>
                    <img src={NewsImage} alt="newsimage" className='blog-image'/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:"5rem"}}>
                    <p className='blog-date'>01 JUNE 2024</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'1.5rem'}><path fill="#ffffff" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
                </div>
                <h1 className='blog-title'>Unveiling Excellence in Events & Exhibitions</h1>
                <div className='blog-content'>

                    <p className='blog-description'>Welcome to the latest edition of the Wadhwa Events & Exhibits newsletter, where we celebrate our milestones and showcase our commitment to creating extraordinary experiences for our esteemed clients. From corporate giants to educational institutions, we have left an indelible mark in the world of events and exhibits.</p>
                    <p className='blog-description'>Our clientele speaks volumes about our expertise and dedication. We’ve delivered sophisticated and dynamic corporate event solutions for TATA, reflecting the brand’s innovation and legacy; curated elegant and expansive exhibitions for Sahara that showcased the company’s diverse portfolio; designed high-impact product launches and trade show exhibits for JCB to captivate global audiences; executed luxurious private events and bespoke exhibits for Pristine’s elite clientele; partnered with ICE Global for international conferences, ensuring flawless execution with a touch of finesse; and crafted stunning displays and promotional events for PNG Jewellers that radiated the brand’s elegance and tradition.</p>
                    <p className='blog-description'>At MIT ADT University, we have managed a variety of impactful events that showcased the institution’s commitment to innovation and excellence. Our work included conceptualizing and executing academic summits, cultural fests, and technology expos that brought together students, faculty, and industry leaders. Notably, we had the honor of hosting and managing Persona, Pune's biggest techno-cultural event. With its dynamic mix of technology, culture, and creativity, Persona became a resounding success under our meticulous planning and seamless execution, further solidifying the university’s reputation as a hub of innovation and culture.</p>
                    <p className='blog-description'>We take pride in our ability to adapt and innovate. Whether it’s crafting bespoke solutions for new-age startups or handling mega-events for established enterprises, Wadhwa Events & Exhibits continues to redefine industry standards. As we step into the future, our commitment to delivering excellence remains unwavering. With each project, we aim to inspire, innovate, and leave a lasting impression on our clients and their audiences.</p>
                    <p className='blog-description'>Follow us on our journey to transform ideas into reality. For inquiries, partnerships, or to explore how we can make your vision come alive, reach out to us today.</p>
                </div>
            </div>

            <div className='section-divider'></div>

            <div className="recent-posts-container">
            <h1 className="recent-posts-main-heading">RECENT BLOG POST</h1>
            
            <div className="recent-posts-grid">
                {currentPosts.map(post => (
                    <div key={post.id} className="recent-posts-item">
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
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="recent-posts-nav-btn"
                        aria-label="Previous page"
                    >
                        Prev
                    </button>

                    <div className="recent-posts-numbers">
                        {renderPaginationNumbers()}
                    </div>

                    <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="recent-posts-nav-btn"
                        aria-label="Next page"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>

            <AppointmentComponent />
        </div>
    )
}

export default Blog
