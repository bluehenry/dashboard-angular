import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProductInMemoryService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        'id': 1,
        'name': 'Truck',
        'category': 'Equipment',
        'description': 'The Truck is a strong, durable Cat C9.3 ACERT engine platform.',
        'price': '95.61'
      },
      {
        'id': 2,
        'name': 'Loader',
        'category': 'Equipment',
        'description': 'Loaders set the industry standard for operator comfort, performance, versatility and jobsite efficiency.',
        'price': '85.40'
      },
      {
        'id': 3,
        'name': 'Track Asphalt Paver',
        'category': 'Equipment',
        'description': ' Easy, simplified driving - with controls which give precise, immediate response.',
        'price': '200.00'
      },
      {
        'id': 4,
        'name': 'Center-Pivot Backhoe Loaders',
        'category': 'Equipment',
        'description': 'Backhoe Loaders set the industry standard for operator comfort, performance, versatility and jobsite efficiency.',
        'price': '3500.00'
      },
      {
        'id': 5,
        'name': 'Track Undercarriage',
        'category': 'Equipment',
        'description': 'Optimized performance and simplified service to complete tough milling applications with productive results.',
        'price': '250.00'
      },
      {
        'id': 6,
        'name': 'Landfill Compactor',
        'category': 'Equipment',
        'description': 'Ensuring maximum availability through multiple life cycles.',
        'price': '800.00'
      },
      {
        'id': 7,
        'name': 'Compact Track Loader',
        'category': 'Equipment',
        'description': 'Delivers impressive mid-lift reach and excellent digging performanc.',
        'price': '7800.00'
      },
      {
        'id': 8,
        'name': 'Small Dozer',
        'category': 'Equipment',
        'description': 'New grade control feature provides you slope of blade in cross slope direction.',
        'price': '900.00'
      },
      {
        'id': 9,
        'name': 'Draglines',
        'category': 'Equipment',
        'description': 'The most productive and versatile machine in the industry.',
        'price': '234.00'
      },
      {
        'id': 10,
        'name': 'Rotary Blasthole Drill',
        'category': 'Equipment',
        'description': 'crawler-mounted blasthole drill is designed to drill from 152-250 mm (6-9.8 in) diameter holes.',
        'price': '680.00'
      },
      {
        'id': 11,
        'name': 'Mining Trucks',
        'category': 'Equipment',
        'description': 'Engineered for performance, designed for comfort, built to last.',
        'price': '888.00'
      },
      {
        'id': 12,
        'name': 'Wheel Loaders',
        'category': 'Equipment',
        'description': 'Spacious cab with joystick control keeps you comfortable throughout the work day.',
        'price': '666.00'
      },
      {
        'id': 13,
        'name': 'Truck',
        'category': 'Equipment',
        'description': 'The Truck is a strong, durable Cat C9.3 ACERT engine platform.',
        'price': '95.61'
      },
      {
        'id': 14,
        'name': 'Loader',
        'category': 'Equipment',
        'description': 'Loaders set the industry standard for operator comfort, performance, versatility and jobsite efficiency.',
        'price': '85.40'
      },
      {
        'id': 15,
        'name': 'Track Asphalt Paver',
        'category': 'Equipment',
        'description': ' Easy, simplified driving - with controls which give precise, immediate response.',
        'price': '200.00'
      },
      {
        'id': 16,
        'name': 'Center-Pivot Backhoe Loaders',
        'category': 'Equipment',
        'description': 'Backhoe Loaders set the industry standard for operator comfort, performance, versatility and jobsite efficiency.',
        'price': '3500.00'
      },
      {
        'id': 17,
        'name': 'Track Undercarriage',
        'category': 'Equipment',
        'description': 'Optimized performance and simplified service to complete tough milling applications with productive results.',
        'price': '250.00'
      },
      {
        'id': 18,
        'name': 'Landfill Compactor',
        'category': 'Equipment',
        'description': 'Ensuring maximum availability through multiple life cycles.',
        'price': '800.00'
      },
      {
        'id': 19,
        'name': 'Compact Track Loader',
        'category': 'Equipment',
        'description': 'Delivers impressive mid-lift reach and excellent digging performanc.',
        'price': '7800.00'
      },
      {
        'id': 20,
        'name': 'Small Dozer',
        'category': 'Equipment',
        'description': 'New grade control feature provides you slope of blade in cross slope direction.',
        'price': '900.00'
      },
      {
        'id': 21,
        'name': 'Draglines',
        'category': 'Equipment',
        'description': 'The most productive and versatile machine in the industry.',
        'price': '234.00'
      },
      {
        'id': 22,
        'name': 'Rotary Blasthole Drill',
        'category': 'Equipment',
        'description': 'crawler-mounted blasthole drill is designed to drill from 152-250 mm (6-9.8 in) diameter holes.',
        'price': '680.00'
      },
      {
        'id': 23,
        'name': 'Mining Trucks',
        'category': 'Equipment',
        'description': 'Engineered for performance, designed for comfort, built to last.',
        'price': '888.00'
      },
      {
        'id': 24,
        'name': 'Wheel Loaders',
        'category': 'Equipment',
        'description': 'Spacious cab with joystick control keeps you comfortable throughout the work day.',
        'price': '666.00'
      }
    ];
    return { products };
  }
}

