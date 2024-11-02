using UnityEngine;
using UnityEngine.SceneManagement;
//using UnityEditor.Animations;

using TMPro;

public class PlayerConrol : MonoBehaviour
{
    private float speed = 5f;
    private Rigidbody2D rb2d;
    private Animator anim;
    private bool canjump = true;

    public int health = 3;
    public int coin = 0;

    //private AnimatorController controller;

    [SerializeField] TextMeshProUGUI coin_txt;
    [SerializeField] TextMeshProUGUI hp_txt;
    [SerializeField] string animat;

    void Start()
    {
        rb2d = gameObject.GetComponent<Rigidbody2D>();
        anim = gameObject.GetComponent<Animator>();
        hp_txt.text = health + "";
        coin_txt.text = coin + "";
    }


    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Jump();
        }
    }

    

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "ground")
        {
            canjump = true;
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "obstacle")
        {
            health--;
            hp_txt.text = health + "";
            if (health <= 0)
            {
                SceneManager.LoadScene(0);
            }
        }
        else if (collision.gameObject.tag == "coin")
        {
            coin++;
            coin_txt.text = coin + "";
            Destroy(collision.gameObject);
        }
    }

    public void Jump()
    {
        if (canjump)
        {
            rb2d.AddForce(Vector2.up * speed, ForceMode2D.Impulse);

            canjump = false;

            anim.Play(animat);
        }
    }
}

