import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality solutions.',
  plans: [
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'Perfect for both business and personal use.',
      price: <HStack>
        <Text textDecoration="line-through" fontSize="sm" color="gray.400">
        $1999.99
        </Text>
        <Text>$999.99</Text>
      </HStack>,
      features: [
        {
          title: 'Responsive Design',
        },
        {
          title: 'Cloud Image Hosting',
        },
        {
          title: 'MIT License',
        },
        null,
        {
          title: 'Full Content Management System',
          iconColor: 'green.400',
        },
        {
          title: 'Customizable Templates',
          iconColor: 'green.400',
        },
        {
          title: 'SEO Optimized',
          iconColor: 'green.400',
        },
      ],
      action: {
        label: 'Get Started',
        href: '/signup',
      },
    },
    {
      id: 'contract',
      title: 'Contract Work',
      description: 'Flexible and tailored solutions for your specific needs.',
      price: 'Custom',
      isRecommended: true,
      features: [
        {
          title: 'Dedicated Developer(s)',
        },
        {
          title: 'Regular Progress Updates',
        },
        {
          title: 'Quality Assurance',
        },
        {
          title: 'Flexible Payment Terms',
        },
        {
          title: 'Confidentiality & Security',
        },
        {
          title: 'Access to Expertise',
        },
        null,
        {
          title: 'Custom Project Scope',
          iconColor: 'green.400',
        },
        {
          title: 'Scalable Solutions',
          iconColor: 'green.400',
        },
        {
          title: 'Post-Project Support',
          iconColor: 'green.400',
        },

      ],
      action: {
        label: 'Get Started',
        href: '/signup',
      },
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website',
      description: 'Comprehensive solution for online businesses.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
          $4999.99
          </Text>
          <Text>$3499.99</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Customizable Templates',
        },
        {
          title: 'Full Content Management System',
        },
        {
          title: 'Cloud Image Hosting',
        },
        {
          title: 'Responsive Design',
        },
        {
          title: 'SEO Optimized',
        },
        {
          title: 'MIT License',
        },
        null,
        {
          title: 'Admin Analytics Dashboard',
          iconColor: 'green.400',
        },
        {
          title: 'Payment System',
          iconColor: 'green.400',
        },
        {
          title: 'Email Marketing',
          iconColor: 'green.400',
        },
      ],
      action: {
        label: 'Get Started',
        href: '/signup',
      },
    },
  ],
}
