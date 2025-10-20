# Deployment Guide - WayBi Taxi Landing Page

This guide will help you deploy your WayBi taxi landing page to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts** and your site will be live!

## 🌐 Deploy to Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Netlify**:
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository to Netlify

3. **Configure redirects** (create `_redirects` file in `public` folder):
```
/*    /index.html   200
```

## 🐳 Deploy with Docker

1. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and run**:
```bash
docker build -t waybi-landing .
docker run -p 3000:3000 waybi-landing
```

## 📱 Environment Variables

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_PHONE_NUMBER=+919876543210
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
NEXT_PUBLIC_EMAIL=info@waybi.com
```

## 🔧 Pre-deployment Checklist

- [ ] Update contact information in all components
- [ ] Replace placeholder images with actual photos
- [ ] Test all contact forms and buttons
- [ ] Verify WhatsApp and phone links work
- [ ] Check mobile responsiveness
- [ ] Test loading speeds
- [ ] Verify SEO meta tags
- [ ] Check for broken links

## 📊 Performance Optimization

1. **Image Optimization**:
   - Use WebP format for images
   - Optimize image sizes
   - Use Next.js Image component

2. **Code Splitting**:
   - Already implemented with Next.js
   - Lazy load components when needed

3. **Caching**:
   - Enable browser caching
   - Use CDN for static assets

## 🔍 SEO Checklist

- [ ] Meta title and description set
- [ ] Open Graph tags configured
- [ ] Twitter Card tags added
- [ ] Alt text for all images
- [ ] Proper heading hierarchy
- [ ] Schema markup (optional)
- [ ] Sitemap generated
- [ ] Robots.txt configured

## 📱 Mobile Testing

Test on various devices:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Various screen sizes

## 🚨 Common Issues & Solutions

### Issue: Images not loading
**Solution**: Check image URLs and ensure they're accessible

### Issue: WhatsApp link not working
**Solution**: Verify phone number format (no spaces, include country code)

### Issue: Contact form not working
**Solution**: Check form action and ensure backend is configured

### Issue: Slow loading
**Solution**: Optimize images and enable compression

## 📞 Support

For deployment issues:
- Phone: +91 98765 43210
- WhatsApp: [Click here](https://wa.me/919876543210)
- Email: info@waybi.com

## 🎯 Post-Deployment

1. **Test all functionality**
2. **Submit to search engines**
3. **Set up analytics**
4. **Monitor performance**
5. **Collect user feedback**

---

**Happy Deploying! 🚀**
