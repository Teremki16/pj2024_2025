using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UIElements;

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] int speed = 2;
    Rigidbody2D rb2d;
    public int HP;
    public int coins;
    [SerializeField] TextMeshProUGUI HP_txt;
    [SerializeField] TextMeshProUGUI Coin_txt;
    [SerializeField]TextMeshProUGUI textBox;
    Animator anim;

    [SerializeField] string[] idleAnim;
    [SerializeField] string[] walkAnim;
    [Header("SHOOT")]
    [SerializeField] GameObject ball;

    [SerializeField] GameObject panelka;

    int AnimInd;

    void Start()
    {
        panelka.SetActive(false);
        HP = 5;
        rb2d = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
        UpdateHP();
        UpdateCoin();
        textBox = GameObject.Find("S_text").GetComponent<TextMeshProUGUI>();
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.Escape))
        {
            SceneManager.LoadScene(0);
        }
        if(Input.GetKey(KeyCode.Space))
        {
            Shoot();
        }
    }
    private void FixedUpdate()
    {
        rb2d.velocity = new Vector2(Input.GetAxis("Horizontal") * speed, Input.GetAxis("Vertical")*speed);
        Animat(rb2d.velocity);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Enemy"))
        {
            HP--;
            if (HP <= 0) SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
            UpdateHP();
        }
        if(collision.gameObject.CompareTag("Food"))
        {
            HP++;
            Destroy(collision.gameObject);
            UpdateHP();
        }
        if (collision.gameObject.CompareTag("Coin"))
        {
            coins++;
            Destroy(collision.gameObject);
            UpdateCoin();
            if(coins>=10)
            {
                panelka.SetActive(true);
            }
        }
        if (collision.gameObject.CompareTag("Papir"))
        {
            textBox.text = collision.gameObject.GetComponent<SuzhetkaScript>().S_textt;
        }
    }
    void UpdateHP()
    {
        HP_txt.text = "HP:" + HP;
    }
    void UpdateCoin()
    {
        Coin_txt.text = "Coins:" + coins;
    }
    void Animat(Vector2 moving)
    {
        
        if (moving.y > 0.1f) AnimInd = 0;
        if (moving.x > 0.1f) AnimInd = 1;
        if (moving.y < -0.1f) AnimInd = 2;
        if (moving.x < -0.1f) AnimInd = 3;
        if (moving.y > 0.1f|| moving.x > 0.1f|| moving.y < -0.1f|| moving.x < -0.1f)
        {
            anim.Play(walkAnim[AnimInd]);
        }
        else
        {
            anim.Play(idleAnim[AnimInd]);
        }
    }

    void Shoot()
    {
        GameObject balll =Instantiate(ball,transform.position,Quaternion.identity);
        Vector3 mouseScreenPos = Input.mousePosition;
        Vector3 mouseWorldPos = Camera.main.ScreenToWorldPoint(mouseScreenPos);
        mouseWorldPos.z = balll.transform.position.z;
        Vector3 direction = mouseWorldPos - balll.transform.position;
        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        balll.transform.rotation = Quaternion.Euler(new Vector3(0, 0, angle));
        balll.GetComponent<Rigidbody2D>().AddForce(direction.normalized*5,ForceMode2D.Impulse);
    }

    // for UI
    public void menu()
    {
        SceneManager.LoadScene(0);
    }
    public void again()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
    public void Next()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex+1);
    }
   


}
