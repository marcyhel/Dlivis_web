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

  List _isHovering = [false, false, false, false, false, false, false];
  List _isSelected = [true, false, false, false, false, false, false];

  int _current = 0;

  final List<String> images = [
    'assets/images/11.png',
    'assets/images/22.png',
    'assets/images/33.png',
    'assets/images/44.png',
    'assets/images/55.png',
    'assets/images/66.png',
  ];

  final List<String> places = [
    '      •      ',
    '      •      ',
    '      •      ',
    '      •      ',
    '      •      ',
    '      •      ',
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
                  ResponsiveWidget.isSmallScreen(context) ? 15 / 8 : 25 / 8,
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
                aspectRatio: 22 / 8,
                child: Center(
                  heightFactor: 1,
                  child: Align(
                    alignment: Alignment.bottomCenter,
                    child: Padding(
                      padding: EdgeInsets.only(
                        left: screenSize.width / 8,
                        right: screenSize.width / 8,
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
                                            fontSize: 30,
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
                                          width: screenSize.width / 10,
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
