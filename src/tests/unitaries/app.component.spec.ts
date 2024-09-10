import { ComponentFixture, TestBed } from "@angular/core/testing";
import AppComponent from "../../app/app.component";
import { SITE_TITLE } from "../../app/constants/user_interface_constants";

describe('Test Component "App" Behavior', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it("Test If Sites' Title Is Set", () => {
    const app = fixture.componentInstance;

    expect(app.title).toEqual(SITE_TITLE);
  });
});
