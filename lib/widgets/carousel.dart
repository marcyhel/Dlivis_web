import 'package:carousel_slider/carousel_slider.dart';
import 'package:explore/widgets/responsive.dart';
import 'package:flutter/material.dart';

class DestinationCarousel extends StatefulWidget {
  @override
  _DestinationCarouselState createState() => _DestinationCarouselState();
}

class _DestinationCarouselState extends State<DestinationCarousel> {
  final String imagePath = 'assets/images/';

  final CarouselController _controller = CarouselController();

  List _isHovering = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  List _isSelected = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  int _current = 0;

  final List<String> images = [
    'assets/images/a1.jpeg',
    'assets/images/a2.jpeg',
    'assets/images/a3.jpeg',
    'assets/images/a4.jpeg',
    'assets/images/a5.jpeg',
    'assets/images/a6.jpeg',
    'assets/images/a7.jpeg',
    'assets/images/a8.jpeg',
    'assets/images/a9.jpeg',
    'assets/images/a10.jpeg',
    'assets/images/a11.jpeg',
    'assets/images/a12.jpeg',
    'assets/images/a13.jpeg',
    'assets/images/a14.jpeg',
    'assets/images/a15.jpeg',
    'assets/images/a16.jpeg',
    'assets/images/a17.jpeg',
    
    'assets/images/a19.jpeg',
    'assets/images/a20.jpeg',
    
    
    
    
  ];

  final List<String> places = [
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
    '  •  ',
   
   
    
    
  ];

  List<Widget> generateImageTiles(screenSize) {
    return images
        .map(
          (element) => Container(
            margin: EdgeInsets.all(7),
            decoration: BoxDecoration(boxShadow: [
              BoxShadow(
                color: Colors.black38,
                offset: Offset(2, 2),
                blurRadius: 5,
              ),
            ]),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: Image.asset(
                element,
                fit: BoxFit.cover,
              ),
            ),
          ),
        )
        .toList();
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    var imageSliders = generateImageTiles(screenSize);

    return Stack(
      children: [
        CarouselSlider(
          items: imageSliders,
          options: CarouselOptions(
              scrollPhysics: ResponsiveWidget.isSmallScreen(context)
                  ? PageScrollPhysics()
                  : NeverScrollableScrollPhysics(),
              enlargeCenterPage: true,
              aspectRatio:
                  ResponsiveWidget.isSmallScreen(context) ? 9 / 8 : 25 / 8,
              autoPlay: true,
              onPageChanged: (index, reason) {
                setState(() {
                  _current = index;
                  for (int i = 0; i < imageSliders.length; i++) {
                    if (i == index) {
                      _isSelected[i] = true;
                    } else {
                      _isSelected[i] = false;
                    }
                  }
                });
              }),
          carouselController: _controller,
        ),
        AspectRatio(
          aspectRatio: 18 / 8,
          child: Center(
            child: Text(
              "",
              style: TextStyle(
                letterSpacing: 8,
                //fontFamily: 'Electrolize',
                fontSize: screenSize.width,
                color: Colors.white,
              ),
            ),
          ),
        ),
        ResponsiveWidget.isSmallScreen(context)
            ? Container()
            : AspectRatio(
                aspectRatio: 21 / 8,
                child: Center(
                  heightFactor: 1,
                  child: Align(
                    alignment: Alignment.bottomCenter,
                    child: Padding(
                      padding: EdgeInsets.only(
                        left:2,
                        right:2,
                      ),
                      child: Card(
                        elevation: 5,
                        child: Padding(
                          padding: EdgeInsets.only(
                            top: screenSize.height / 50,
                            bottom: screenSize.height / 50,
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              for (int i = 0; i < places.length; i++)
                                Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    InkWell(
                                      splashColor: Colors.transparent,
                                      hoverColor: Colors.transparent,
                                      onHover: (value) {
                                        setState(() {
                                          value
                                              ? _isHovering[i] = true
                                              : _isHovering[i] = false;
                                        });
                                      },
                                      onTap: () {
                                        _controller.animateToPage(i);
                                      },
                                      child: Padding(
                                        padding: EdgeInsets.only(
                                            top: screenSize.height / 660,
                                            bottom: screenSize.height / 660),
                                        child: Text(
                                          places[i],
                                          style: TextStyle(
                                            fontSize: 20,
                                            color: _isHovering[i]
                                                ? Theme.of(context)
                                                    .primaryTextTheme
                                                    .button!
                                                    .decorationColor
                                                : Theme.of(context)
                                                    .primaryTextTheme
                                                    .button!
                                                    .color,
                                          ),
                                        ),
                                      ),
                                    ),
                                    Visibility(
                                      maintainSize: true,
                                      maintainAnimation: true,
                                      maintainState: true,
                                      visible: _isSelected[i],
                                      child: AnimatedOpacity(
                                        duration: Duration(milliseconds: 400),
                                        opacity: _isSelected[i] ? 1 : 0,
                                        child: Container(
                                          height: 5,
                                          decoration: BoxDecoration(
                                            color: Colors.blueGrey,
                                            borderRadius: BorderRadius.all(
                                              Radius.circular(10),
                                            ),
                                          ),
                                          width: screenSize.width / (places.length+places.length/1.5),
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
      ],
    );
  }
}
