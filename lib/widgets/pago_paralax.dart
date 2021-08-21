import 'package:explore/widgets/responsive.dart';
import 'package:flutter/material.dart';

class FeaturedTiles_pago_paralax extends StatefulWidget {
  FeaturedTiles_pago_paralax({
    Key? key,
    required this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  State<FeaturedTiles_pago_paralax> createState() =>
      _FeaturedTiles_pago_paralaxState();
}

class _FeaturedTiles_pago_paralaxState
    extends State<FeaturedTiles_pago_paralax> {
  final List<String> assets = [
    'assets/images/pix.png',
    'assets/images/caixa.png',
    'assets/images/pic.png',
    'assets/images/mercado.png',
  ];

  final List<String> title = ['Pix', 'Caixa', 'Pic Pay', 'Mercado pago'];

  var top = 0.0;
  var top2 = 0.0;

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget.isSmallScreen(context)
        ? Padding(
            padding: EdgeInsets.only(top: widget.screenSize.height / 50),
            child: NotificationListener(
              onNotification: (v) {
                if (v is ScrollUpdateNotification) {
                  setState(() {
                    if (v.metrics.axis != Axis.vertical) {
                      top -= v.scrollDelta! / 4;
                      top2 -= v.scrollDelta! / 3;
                    }
                  });
                }

                return true;
              },
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    SizedBox(width: widget.screenSize.width / 15),
                    ...Iterable<int>.generate(assets.length).map(
                      (int pageIndex) => Row(
                        children: [
                          Stack(
                            overflow: Overflow.clip,
                            children: [
                              Positioned(
                                top: -10,
                                left: (-(pageIndex + 1) * 100) - top,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      height: widget.screenSize.width / 2.0,
                                      width: widget.screenSize.width / 1.0,
                                      child: Container(
                                        margin: EdgeInsets.all(7),
                                        decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(5.0),
                                            boxShadow: [
                                              BoxShadow(
                                                color: Colors.black38,
                                                offset: Offset(2, 2),
                                                blurRadius: 5,
                                              ),
                                            ]),
                                        child: ClipRRect(
                                          borderRadius:
                                              BorderRadius.circular(5.0),
                                          child: Image.asset(
                                            assets[pageIndex],
                                            fit: BoxFit.cover,
                                          ),
                                        ),
                                      ),
                                    ),
                                    Padding(
                                      padding: EdgeInsets.only(
                                        left: 7,
                                        top: widget.screenSize.height / 70,
                                      ),
                                      child: Text(
                                        title[pageIndex],
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontFamily: 'Montserrat',
                                          fontWeight: FontWeight.w500,
                                          color: Theme.of(context)
                                              .primaryTextTheme
                                              .subtitle1!
                                              .color,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Container(
                                margin: EdgeInsets.all(7),
                                height: widget.screenSize.height / 5,
                                width: widget.screenSize.height / 3,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                  color: Colors.amber,
                                  boxShadow: [
                                    BoxShadow(
                                      color: Colors.black38,
                                      offset: Offset(2, 2),
                                      blurRadius: 5,
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                          SizedBox(width: widget.screenSize.width / 15),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          )
        : Padding(
            padding: EdgeInsets.only(
              top: widget.screenSize.height * 0.06,
              left: widget.screenSize.width / 15,
              right: widget.screenSize.width / 15,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                ...Iterable<int>.generate(assets.length).map(
                  (int pageIndex) => Column(
                    children: [
                      SizedBox(
                        height: widget.screenSize.width / 8,
                        width: widget.screenSize.width / 4.8,
                        child: Container(
                          margin: EdgeInsets.all(7),
                          decoration: BoxDecoration(boxShadow: [
                            BoxShadow(
                              color: Colors.black38,
                              offset: Offset(2, 2),
                              blurRadius: 5,
                            ),
                          ]),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(5.0),
                            child: Image.asset(
                              assets[pageIndex],
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsets.only(
                          top: widget.screenSize.height / 70,
                        ),
                        child: Text(
                          title[pageIndex],
                          style: TextStyle(
                            fontSize: 16,
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.w500,
                            color: Theme.of(context)
                                .primaryTextTheme
                                .subtitle1!
                                .color,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
  }
}
